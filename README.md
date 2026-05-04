# Завдання: Розширений менеджер подій на TypeScript (Advanced)

## 📝 Опис

Потрібно реалізувати TypeScript-застосунок для керування подіями. Основна увага — на просунуті можливості TypeScript: generics, discriminated unions, mapped types, conditional types, utility types, type guards, readonly-поля, generic constraints та типізація складних структур даних.

---

## 🎯 Ціль

- Закріпити Advanced-рівень TypeScript на практиці
- Навчитись будувати масштабовану та типобезпечну архітектуру
- Реалізувати складну модель даних без використання `any`
- Використати просунуті механізми TS у реальному сценарії

---

## ⚙️ Що потрібно зробити

1. Створити базову модель події `BaseEvent`
2. Реалізувати щонайменше 3 типи подій:
   - `MeetingEvent`
   - `TaskEvent`
   - `ReminderEvent`
3. У кожного типу події мають бути:
   - спільні поля з базової моделі
   - власні спеціалізовані поля
4. Використати `discriminated union` для об’єднання всіх типів подій в один тип `AppEvent`
5. Створити клас `EventManager`, який підтримує:
   - додавання події
   - видалення події
   - оновлення події
   - отримання всіх подій
   - отримання подій конкретного типу
   - фільтрацію подій за довільною умовою
6. Реалізувати generic-метод для отримання подій за типом
7. Реалізувати generic-функцію для пошуку елемента за `id`
8. Реалізувати type guard для кожного типу події
9. Використати `Readonly` або readonly-поля для незмінних даних
10. Реалізувати окремий тип для створення нової події, де службові поля генеруються автоматично
11. Реалізувати окремий тип для часткового оновлення події
12. Додати типізований словник або мапу подій, згрупованих за типом
13. Додати обробку помилок:
   - оновлення неіснуючої події
   - видалення неіснуючої події
   - спроба створити подію з невалідними даними

---

## 📌 Умови

- Використати:
  - `interface`
  - `type`
  - `discriminated union`
  - `generic`
  - `generic constraints`
  - `Partial`
  - `Omit`
  - `Record` або mapped types
  - `conditional types`
  - `type guard`
  - `readonly`
- Має бути щонайменше 9 тестових подій
- Події повинні бути різних типів
- Усі функції, методи та змінні мають бути типізовані
- Використання `any` заборонено
- Архітектура має бути розділена щонайменше на:
  - моделі
  - менеджер/сервіс
  - точку входу для демонстрації роботи

---

## 📤 Результат

Після виконання:

- Реалізовано типобезпечний менеджер подій
- Підтримуються різні типи подій через `discriminated union`
- Generic-функції та type guards працюють коректно
- Код не містить `any`
- Використано advanced-можливості TypeScript
- Рішення є незалежним і не пов’язане з попередніми лабораторними

---

## 📸 Умови здачі

- Посилання на GitHub репозиторій
- Робота має бути виконана в окремому репозиторії або окремій директорії
- Додати скріншоти:
  - список усіх подій
  - приклад подій різних типів
  - результат фільтрації подій
  - результат оновлення або видалення події
- Якщо це консольний застосунок — додати скріншоти роботи в терміналі
- Проєкт повинен коректно запускатись

---

## 📚 Корисні матеріали

- TypeScript Handbook:  
  https://www.typescriptlang.org/docs/

- Generics:  
  https://www.typescriptlang.org/docs/handbook/2/generics.html

- Conditional Types:  
  https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

- Mapped Types:  
  https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

- Narrowing / Type Guards:  
  https://www.typescriptlang.org/docs/handbook/2/narrowing.html

- Utility Types:  
  https://www.typescriptlang.org/docs/handbook/utility-types.html

- Unions and Discriminated Unions:  
  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
