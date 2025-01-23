# React Native Dimensions API Inconsistency Bug

This repository demonstrates a common bug encountered when using the `Dimensions` API in React Native to retrieve screen dimensions.  The core issue is the potential for inaccurate or outdated dimension values, particularly during initial render and orientation changes.

## Problem

The `Dimensions.get()` method might not always provide up-to-date dimensions. This can lead to components rendering with incorrect sizes, causing layout problems and unexpected visual behavior.

## Solution

The solution involves using the `Dimensions` API's `addEventListener` method to listen for changes in screen dimensions and updating the component's state accordingly. This ensures that the component always reflects the current screen size.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an iOS or Android simulator or device.
4. Observe the initial dimensions logged to the console and how they change (or fail to change) when you rotate the screen.