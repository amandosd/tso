# Frontend developers

Amandos Daulet <Daulet.Amandos@tengizchevroil.com>


# Application requirements

1. Project structure - Feature sliced.
2. Please use meaningful naming for variables, components and functions.
3. All components and functionalities need to be as independent as possible.
4. Use SOLID principles reasonably.
5. Don't overengineer.
6. Code need to be simple, readable and opaque.
7. Use hooks to abstract complicated logic. If logic not so complicated just don't do it.
8. Don't use global variables if a task can be done without it.
9. Терминал, console браузера должен быть чистым без error и warning 
10. Свои лишние и ненужные комментарии - удаляем. Важные комментарии с TODO, FIX, DONT_TUCH с разьяснениями - почему.

# Additional information

Read about feature-sliced metodology here https://feature-sliced.design/

## Layers

0. node_modules - ...
1. Shared — reusable functionality, detached from the specifics of the project/business.
2. Entities — business entities (e.g., User, Product, Order).
3. Features — user interactions, actions that bring business value to the user.
4. Widgets — compositional layer to combine entities and features into meaningful blocks.
5. Pages — compositional layer to construct full pages from entities, features and widgets.
6. Processes — complex inter-page scenarios (e.g., authentication).
7. App — app-wide settings, styles and providers.


## Segments

ui
model
api

## Inner folder structure

/api
/model
/ui
/images
/lib
/lib/hooks.js
/lib/utils.js
/lib/constants.js

# NAMING:

# Page component:

Name it in kebab ('it-is-kebab-case') case as same as it url name

example:
url is www.company.com/products -> pages/products
url is www.company.com/add-product -> pages/add-product


# Architecture and Philosophy

We use feature-sliced & atomic design architecture. Please keep it structure as proceed.
Don't afraid of long functions and variable names. We write it for people and not for computers.
Martin Fowler quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
