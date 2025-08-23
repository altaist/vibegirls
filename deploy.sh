#!/bin/bash

# Скрипт деплоя Vue проекта на хостинг
# Использование: ./deploy.sh <git_repository_url>

set -e  # Остановка при любой ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Функция для логирования
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ОШИБКА] $1${NC}" >&2
}

warning() {
    echo -e "${YELLOW}[ПРЕДУПРЕЖДЕНИЕ] $1${NC}"
}

# Проверка аргументов
if [ $# -eq 0 ]; then
    error "Необходимо указать URL Git репозитория"
    echo "Использование: $0 <git_repository_url>"
    exit 1
fi

GIT_REPO_URL="$1"
TEMP_DIR="temp_deploy_$(date +%s)"
BACKUP_DIR="backup_$(date +%s)"

# Проверка наличия необходимых команд
check_requirements() {
    log "Проверка требований..."
    
    if ! command -v git &> /dev/null; then
        error "Git не установлен"
        exit 1
    fi
    
    if ! command -v node &> /dev/null; then
        error "Node.js не установлен"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        error "npm не установлен"
        exit 1
    fi
    
    # Проверка версии Node.js
    NODE_VERSION=$(node -v | cut -d'v' -f2)
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1)
    
    # Проверяем совместимость: Node.js 20.19+, 21.x, или 22.12+
    if [ "$NODE_MAJOR" -eq 20 ]; then
        REQUIRED_MINOR="20.19.0"
        if [ "$(printf '%s\n' "$REQUIRED_MINOR" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_MINOR" ]; then
            error "Для Node.js 20.x требуется версия 20.19.0 или выше. Текущая версия: $NODE_VERSION"
            exit 1
        fi
    elif [ "$NODE_MAJOR" -eq 21 ]; then
        # Node.js 21.x поддерживается
        log "Node.js 21.x поддерживается"
    elif [ "$NODE_MAJOR" -ge 22 ]; then
        REQUIRED_MINOR="22.12.0"
        if [ "$(printf '%s\n' "$REQUIRED_MINOR" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_MINOR" ]; then
            error "Для Node.js 22.x требуется версия 22.12.0 или выше. Текущая версия: $NODE_VERSION"
            exit 1
        fi
    else
        error "Неподдерживаемая версия Node.js: $NODE_VERSION. Требуется: 20.19+, 21.x, или 22.12+"
        exit 1
    fi
    
    log "Все требования выполнены"
}

# Функция очистки при ошибке
cleanup_on_error() {
    error "Произошла ошибка. Выполняется очистка..."
    
    if [ -d "$TEMP_DIR" ]; then
        log "Удаление временной директории $TEMP_DIR"
        rm -rf "$TEMP_DIR"
    fi
    
    if [ -d "$BACKUP_DIR" ]; then
        log "Восстановление из резервной копии..."
        if [ -d "public_html" ]; then
            rm -rf public_html
        fi
        mv "$BACKUP_DIR" public_html
        log "Резервная копия восстановлена"
    fi
    
    exit 1
}

# Установка обработчика ошибок
trap cleanup_on_error ERR

# Основная функция деплоя
deploy() {
    log "Начинаем деплой проекта..."
    
    # Проверка требований
    check_requirements
    
    # Создание резервной копии текущего public_html
    if [ -d "public_html" ]; then
        log "Создание резервной копии текущего public_html..."
        cp -r public_html "$BACKUP_DIR"
        log "Резервная копия создана: $BACKUP_DIR"
    fi
    
    # Клонирование репозитория
    log "Клонирование репозитория: $GIT_REPO_URL"
    if ! git clone "$GIT_REPO_URL" "$TEMP_DIR"; then
        error "Не удалось клонировать репозиторий"
        exit 1
    fi
    
    # Переход в директорию проекта
    cd "$TEMP_DIR"
    
    # Проверка наличия папки front
    if [ ! -d "front" ]; then
        error "Папка 'front' не найдена в репозитории"
        exit 1
    fi
    
    # Переход в папку front
    cd front
    
    # Проверка наличия package.json
    if [ ! -f "package.json" ]; then
        error "package.json не найден в папке front"
        exit 1
    fi
    
    # Установка зависимостей
    log "Установка npm зависимостей..."
    if ! npm ci --production=false; then
        error "Не удалось установить npm зависимости"
        exit 1
    fi
    
    # Сборка проекта
    log "Сборка проекта..."
    if ! npm run build; then
        error "Не удалось собрать проект"
        exit 1
    fi
    
    # Проверка наличия папки dist
    if [ ! -d "dist" ]; then
        error "Папка dist не создана после сборки"
        exit 1
    fi
    
    # Возврат в корневую директорию
    cd ../..
    
    # Удаление старого public_html
    if [ -d "public_html" ]; then
        log "Удаление старого public_html..."
        rm -rf public_html
    fi
    
    # Копирование собранного проекта в public_html
    log "Копирование собранного проекта в public_html..."
    cp -r "$TEMP_DIR/front/dist" public_html
    
    # Удаление временной директории
    log "Удаление временной директории..."
    rm -rf "$TEMP_DIR"
    
    # Удаление резервной копии (если деплой прошел успешно)
    if [ -d "$BACKUP_DIR" ]; then
        log "Удаление резервной копии..."
        rm -rf "$BACKUP_DIR"
    fi
    
    log "Деплой успешно завершен!"
    log "Сайт доступен в папке public_html"
}

# Запуск деплоя
deploy
