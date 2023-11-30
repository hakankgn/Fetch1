## Proje Hakkında / About The Project

Bu proje, React kullanarak oluşturulmuş bir örnektir. `App.js` dosyasında, `Example` adında bir React componenti bulunmaktadır. Bu component, bir buton içerir ve bu buton her tıklandığında, `id` state'i rastgele bir sayıya güncellenir.

This project is an example created using React. In the `App.js` file, there is a React component named `Example`. This component contains a button, and each time this button is clicked, the `id` state is updated to a random number.

## Kullanılan Teknolojiler / Technologies Used

- React
- JavaScript
- CSS

## Component Hakkında / About The Component

`Example` componenti, `useState`, `useRef` ve `useEffect` React hook'larını kullanır. `useState` ile oluşturulan `id` state'i, her buton tıklamasında rastgele bir sayıya güncellenir. `useRef` ile oluşturulan `ref` referansı, `id` state'ini takip eder. `useEffect` hook'u ise `id` state'indeki değişiklikleri izler ve her değişiklikte bir fetch işlemi gerçekleştirir.

The `Example` component uses the `useState`, `useRef`, and `useEffect` React hooks. The `id` state created with `useState` is updated to a random number with each button click. The `ref` reference created with `useRef` follows the `id` state. The `useEffect` hook watches for changes in the `id` state and performs a fetch operation with each change.

## Çalıştırma / Running

Proje, Visual Studio Code IDE'sinde çalıştırılabilir. Projenin ana dosyası `App.js`'dir ve aktif belge olarak görüntülenir. Bu dosya üzerinde değişiklikler yapabilir ve sonuçları gözlemleyebilirsiniz.

The project can be run in the Visual Studio Code IDE. The main file of the project is `App.js` and is displayed as the active document. You can make changes on this file and observe the results.

## Lisans / License

Bu proje, MIT lisansı altında lisanslanmıştır.

This project is licensed under the MIT license.
