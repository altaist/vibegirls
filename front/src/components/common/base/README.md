# BaseButton - Универсальный компонент кнопки

## Описание
BaseButton - это универсальный компонент кнопки, который поддерживает различные типы стилей и размеров.

## Типы кнопок

### 1. `primary` / `secondary` (Основные кнопки)
- Градиентный фон
- Скругленные углы (12px)
- Подходит для основных действий

```vue
<BaseButton variant="primary" size="lg" @click="handleClick">
  Основное действие
</BaseButton>
```

### 2. `rounded` (Кнопки для каталога)
- Полное скругление (50px)
- Градиентный фон
- Используется в каталогах и списках

```vue
<BaseButton variant="rounded" size="lg" @click="viewAll">
  Все девушки онлайн
</BaseButton>
```

### 3. `standard` (Обычные кнопки) - **ПО УМОЛЧАНИЮ**
- Скругленные углы (12px)
- Большие буквы (uppercase)
- Подходит для действий типа "Начать чат"
- Тип кнопки по умолчанию

```vue
<BaseButton size="lg" @click="startChat">
  Начать чат
</BaseButton>
```

### 4. `outline` (Кнопки с обводкой)
- Прозрачный фон с обводкой
- Для вторичных действий

```vue
<BaseButton variant="outline" size="lg" @click="secondaryAction">
  Вторичное действие
</BaseButton>
```

### 5. `ghost` (Прозрачные кнопки)
- Полностью прозрачные
- Для минималистичного дизайна

```vue
<BaseButton variant="ghost" size="md" @click="minimalAction">
  Минимальное действие
</BaseButton>
```

## Размеры
- `sm` - маленький
- `md` - средний (по умолчанию)
- `lg` - большой

## Дополнительные свойства
- `disabled` - отключенное состояние
- `icon` - иконка (требует BaseIcon компонент)
- `iconPosition` - позиция иконки ('left' | 'right')
- `fullWidth` - полная ширина

## Примеры использования

### Кнопка с иконкой
```vue
<BaseButton 
  variant="primary" 
  size="lg" 
  icon="heart" 
  iconPosition="left"
  @click="like"
>
  Нравится
</BaseButton>
```

### Полноширинная кнопка
```vue
<BaseButton 
  size="lg" 
  fullWidth
  @click="submit"
>
  Отправить
</BaseButton>
```

### Отключенная кнопка
```vue
<BaseButton 
  variant="primary" 
  size="lg" 
  disabled
  @click="action"
>
  Недоступно
</BaseButton>
```
