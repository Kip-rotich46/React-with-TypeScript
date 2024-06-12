# AddToList Component

This README provides an overview of the `AddToList` React component, explaining its purpose, functionality, and how to use it.

## Overview

The `AddToList` component is a form-based React component that allows users to add new people to a list. The component maintains an internal state to manage form inputs and updates the parent component's state when a new person is added.

## Dependencies

- React
- TypeScript

## Props

The `AddToList` component expects the following props:

- `people`: An array of people objects, which is a part of the parent component's state.
- `setPeople`: A function to update the parent component's state with the new list of people.

## State

The component maintains an internal state `input` to handle form inputs, which includes fields for `name`, `age`, `note`, and `img`.

## Functions

### handleChange

This function updates the component's internal state whenever an input field changes.

### handleClick

This function adds a new person to the list and resets the form inputs. It validates the required fields (`name`, `age`, and `img`) before updating the state.

## JSX Structure

The component renders a form with input fields for `name`, `age`, `img`, and `note`, along with a button to add a new person to the list.

## Usage

To use the `AddToList` component, import it into a parent component and provide the required props (`people` and `setPeople`). Ensure that the parent component maintains the state for the list of people and passes down the appropriate props to `AddToList`.

## Conclusion

The `AddToList` component is a straightforward and effective way to manage adding new people to a list in a React application. By maintaining an internal state for form inputs and updating the parent component's state, it ensures a seamless user experience.