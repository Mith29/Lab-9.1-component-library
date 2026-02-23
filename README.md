                        COMPONENT LIBRARY

A reusable React component project built with React + TypeScript.This project demonstrates clean component architecture, prop typing, state management, and basic testing structure.

Getting Started:
1. Install dependencies
npm install
2. Run the development server
npm run dev

 Components:
1️. AlertBox: A reusable alert component.

Props:
type → "success" | "error" | "warning" | "info"
message → string
onClose → function
children → optional ReactNode

Use Case:
Success messages
Error notifications
Cart confirmation alerts

2️.UserProfileCard: Displays user information.

Props:
user
showEmail
showRole
onEdit
children

Use Case:
User dashboards
Profile display sections
Admin panels

3️.ProductDisplay: Displays product details and supports adding to cart.

Props:
product
ShowDescription
showStockStatus
onAddToCart
children

Use Case:
E-commerce product listing
Product detail cards
Shopping cart interactions


Reflection Questions
How did you handle optional props in your components?
I made some props optional and showed the content only if the prop was given. This keeps the component flexible..

What considerations did you make when designing the component interfaces?
I made sure each component does one job and can be reused in different places.

How did you ensure type safety across your components?
I used TypeScript types for props and state so errors can be caught early.

What challenges did you face when implementing component composition?
At first, passing props and using children was confusing, but I solved it by keeping components simple and organized.