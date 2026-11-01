# Figma Toolkit Changelog

> 

*Nord Design System’s parts are versioned and released using Node Package Manager. NPM’s [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## Figma Toolkit

### 4.0.0 `New`

- **New major release that introduces a new theming system using Figma Variables!!** ✨🥳
- For detailed description of all changes and the steps required for migration, please see [Migration to 4.0.0 Figma Toolkit](/migrations/figma-4.0.0/).
- Migrates from previous library-based theming system to [Figma Variables](https://resources/support/.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma){rel="[\"nofollow\"]"} for improved theme management.
- Reduces manual steps required for theme switching and eliminates the need to manage multiple separate libraries for theming.
- Enables automatic theme application when dragging components from the asset panel.
- Allows multiple themes on one page by applying different themes to individual frames.
- Expands theme support to include comprehensive coverage for both therapy and veterinary brands, with all themes available for both brands.
- Theme switching is simplified through the Tokens variable collection mode selector, with no manual library swapping required.
- Color Styles are now linked with Figma Variables and should be removed in a future update in favor of Variables.
- Removes the Number Input component, as it never had a coded component counterpart. Use the [Input component with stepper functionality](https://www.figma.com/design/yarhTRV8eFffff0BIpevi6/-v4-WIP--Nord-Figma-Toolkit?node-id=7020-56569&t=hTn0MV3alhmLVqgI-0){rel="[\"nofollow\"]"} instead to maintain design-code parity.
- Release date 14.11.2025.

### 3.2.0 `New`

- Adds 4 new icons to [Nordicons](/icons/): `interface-dnr`, `interface-cpr-acpr`, `interface-cpr-unknown` and `interface-ai`.
- Release date 22.5.2024.

### 3.1.0

- Updates Banner `Info` variant color from `text-link` to `text-info`
- Adds nested `Header` properties to Card component
- Renames `medical / nertered` to `medical / neutered-male` and adds `medical / birthday` and `interface / duplicate` icon to the Nordicons library
- Adds Header property with S and L size variants to the Drawer
- Adds Breadcrumbs as a subcomponent for the Header component
- Release date 29.8.2023.

### 3.0.0

- **New major release that brings various improvements and bug fixes!!** ✨🥳
- For detailed migration guide, please see [Migration to 3.0.0 Figma Toolkit](/migrations/figma-3.0.0/).
- Below is a summary of included changes:

#### Design Tokens

- Updates name from `Radius` to `Border Radius`
- Updates [Space](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7569%3A186879&mode=design&t=G8eh8tQNx2AZl2PE-1){rel="[\"nofollow\"]"} component with improved label and `Position` property

#### Button

- Adds ability to show and hide slots through new properties for `Start slot` and `End slot`
- Adds nested instances of the Icon component which can be swapped with any Nordicon
- Adds [Button examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7192%3A64450&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} to demonstrate the Button variants and properties
- Adds [Button interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129904&type=design&node-id=7192-64450&viewport=1613%2C143%2C0.43&t=TacEQmXTGy41MDhk-1&scaling=min-zoom&starting-point-node-id=7192%3A64450&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"} such as hover, mouse down, and active states
- Adds `Loading` as a state property for the Button component which includes animation
- Removes `Icon position` property which has been replaced with the new `Start slot` and `End slot` properties
- Updates height of small button from 26px to 28px

#### Button Group

- Adds `Start slot` and `End slot` to the [Button Group](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7381%3A185025&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} slots which allows for adding icons
- Adds `Vertical` property toggle to the Button Group
- Adds `Slot` property toggles to adjust the number of Buttons in the Button Group
- Adds nested overrides for adjusting individual button content such as `Icon` and `Button text`. This allows all properties for the Button Group to be adjusted from a single properties panel
- Adds [Button Group examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7381%3A185029&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"}
- Removes the `Content` property from the Button Group and which has been replaced with the `Slot` property
- Renames state property from `Selected` to `Active`

#### Command Menu

- Adds `No results text` property to [Command Menu](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7423%3A192167&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} component with an empty state
- Adds `Section text`, `Text`, and `Shortcut` text properties to the Command Menu
- Adds hover state to the [Command Menu interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129904&type=design&node-id=7423-192171&viewport=1613%2C143%2C0.43&t=TacEQmXTGy41MDhk-1&scaling=min-zoom&starting-point-node-id=7423%3A192171&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"}
- Adds `Placeholder text` and `Input text` properties to search input field of Command Menu
- Adds `Slot` property which can be used to add and remove Command Menu items
- Adds `Section` property which can be used to group Command Menu items
- Adds [Command Menu examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7423%3A192171&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"}

#### Dropdown

- Separates this component into 3 subcomponents to align with the [Dropdown Item](https://nordhealth.design/components/dropdown-item/){rel="[\"nofollow\"]"}, [Dropdown Group](https://nordhealth.design/components/dropdown-group/){rel="[\"nofollow\"]"}, and [Dropdown](https://nordhealth.design/components/dropdown/){rel="[\"nofollow\"]"} component
- Adds `S`, `M`, and `L` size variants
- Adds [Dropdown Header](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A86243&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} subcomponent with `Text` property, `Header end` slot for buttons, and [Profile](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A86243&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} variant
- Adds toggle to show or hide the dropdown header
- Adds toggles to customize the number of Dropdown Groups in the Dropdown component
- Adds nested instances of [Dropdown Group](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A85912&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} and [Dropdown Item](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A83510&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} in the top level properties panel for the Dropdown
- Adds swap instance property to the Dropdown Group which allows for swapping a Dropdown Group with other content. For example, you can swap dropdowns with messages to create a [Notification dropdown](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7356%3A148959&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} within Nord
- Adds [Dropdown examples](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129904&type=design&node-id=7294-86243&viewport=-455%2C288%2C0.25&t=4OflHi0EuOqZiYzf-1&scaling=min-zoom&starting-point-node-id=7294%3A86243&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"} which also highlight the new interactivity added to the Dropdown component

#### Dropdown Item

- Adds [Dropdown Item](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A83510&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} as a new component
- Removes `Icon` property and replaces with `Start slot` property which supports icons, avatars and prefix text and an `End slot` property which supports icons and prefix text
- Adds [Dropdown Item interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129904&type=design&node-id=7294-83514&viewport=-455%2C288%2C0.25&t=4OflHi0EuOqZiYzf-1&scaling=min-zoom&starting-point-node-id=7294%3A83514&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"}
- Adds `Default text` property
- Adds [Dropdown Item examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A83514&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"}

#### Dropdown Group

- Adds [Dropdown Group](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A85912&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} and [Dropdown Item](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A83510&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} as a new component
- Adds a `Heading` property and `Heading text` property which allows you to toggle and edit Dropdown Group headers
- Adds autolayout between Dropdown Items nested in the Dropdown Group
- Adds `Slot` property for customizing the number of items in a Dropdown Group. Each item uses nested instances of the Dropdown Item
- Adds [Dropdown Group examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7294%3A85916&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"}

#### Calendar

- Adds `Surface` property toggle. When this property is toggled off it removes the surface, border, and dropshadow of the [Calendar](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7284%3A111497&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} component
- Renames the property `Show dot` to `Highlight day` for Calendar Day sub-component
- Adds nested overrides for month and year dropdown that include `Hover`, `Active`, `Disabled`, and `State` properties
- Adds variant [Calendar mobile](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7284%3A111501&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} that includes a header and close button. This variant is meant to be used full-width and pinned to the bottom of the viewport
- Adds [Calendar examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7284%3A111501&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"}

#### Checkbox

- Adds `S` and `L` size variants to the [Checkbox](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7113%3A63266&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"}
- Adds property for `Label text`, `Hint text`, and `Error text`
- Updates property name `Checked` to `Selected`
- Updates property name `Focus` to `Focus ring`
- Updates disabled style of unselected checkbox
- Adds [Checkbox examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7113%3A63270&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"}

#### Checkbox Group

- Adds property for [Checkbox Group](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7113%3A63270&mode=design&t=mKWcjiVkWfEqbcaH-1){rel="[\"nofollow\"]"} `Label` and `Hint`
- Adds `Slot` property for customizing the number of Checkboxes in a Checkbox Group. Each slot now surfaces nested instances of the Checkbox component

#### Date picker

- Adds `S` and `L` size variants for the [Date Picker](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7284%3A103993&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}
- Updates state variants to include `Read-only` and `Disabled` properties
- Moves `Error` property from toggle to state dropdown
- Adds property for `Label Text`, `Hint`, and `Error text`
- Adds `Start slot` which can be used for an icon or a prefix
- Adds `Input Text` and `Placeholder Text` properties
- Adds `End slot` which can be used for an icon or a suffix
- Adds `End button` property which toggles the visibility of the calendar button
- Adds Date Picker interactions
- Adds [Date Picker examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7284%3A103997&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Input

- Adds [Input examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7020%3A56569&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Number input

- Adds new version of the [Number Input](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7284%3A99530&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}
- Adds properties for `Prefix`, `Suffix`, `Start Icon`, `End Icon`
- Adds `S` and `L` sizes
- Updates properties for `Label text`, `Hint text`, and `Error text`
- Adds [Number Input interactivity](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129905&type=design&node-id=7284-99534&viewport=3021%2C448%2C0.21&t=NIwhMAxoC1ryS1Lk-1&scaling=scale-down&starting-point-node-id=7284%3A99534&mode=design){rel="[\"nofollow\"]"}

#### Radio

- Adds `S` and `L` size variants for the [Radio](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7120%3A61292&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}
- Updates properties for `Label text`, `Hint text`, and `Error text`
- Updates `Focus ring` to be available for all states and variants
- Renames property `Checked` to `Selected`
- Removes Radio with Border variant
- Updates disabled unselected Radios to now use `Border Neutral` for the border color and `Active` for the fill
- Adds `Slot` property for customizing the number of Radios in a Radio Group. Each slot now surfaces nested instances of the Radio component
- Updates `Disabled` and `Selected Radios` to now use color token `Border Info`
- Adds `Active` fill to `Unselected` Radio variants
- Adds [Radio interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129905&type=design&node-id=7120-61296&viewport=3021%2C448%2C0.21&t=NIwhMAxoC1ryS1Lk-1&scaling=scale-down&starting-point-node-id=7120%3A61296&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"}
- Adds [Radio examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7120%3A61296&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Select

- Adds Size property with `S`, `M`, and `L` variants
- Adds properties for `Label text`, `Hint text`, and `Error text`
- Adds `Text` property
- Adds `Start slot` for use with icons when needed
- Adds Select dropdown with `Header`, `Slot` for customizing number of dropdown items, and interactions for hover and click
- Adds [Select interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129905&type=design&node-id=7496-192224&viewport=3021%2C448%2C0.21&t=NIwhMAxoC1ryS1Lk-1&scaling=scale-down&starting-point-node-id=7496%3A192224&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"}
- Adds [Select examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7496%3A192224&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Textarea

- Removes [Textarea](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7551%3A201719&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} base components
- Adds properties for `Label text`, `Hint text`, and `Error text`
- Adds Size property with `S`, `M`, and `L` variants
- Adds [Textarea interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129905&type=design&node-id=7551-201723&viewport=3021%2C448%2C0.21&t=NIwhMAxoC1ryS1Lk-1&scaling=scale-down&starting-point-node-id=7551%3A201723&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"}
- Adds [Textarea examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7551%3A201723&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Toggle

- Adds Size property with `S`, `M`, and `L` variants
- Adds properties for `Label text`, `Hint text`, and `Error text`
- Updates `Unchecked` variant color from `Border-Strong` to `Border-Hover`
- Updates `Label` property which determines label positioning to now be called `Reverse order`
- Adds [Toggle interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129905&type=design&node-id=6851-54935&viewport=3021%2C448%2C0.21&t=NIwhMAxoC1ryS1Lk-1&scaling=scale-down&starting-point-node-id=6851%3A54935&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"}
- Adds `Focus ring` property
- Adds [Toggle examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=6851%3A54935&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Toggle Group

- Adds properties for `Label text`, `Hint text`, and `Error text`
- Adds `Slot` property for customizing the number of Toggles in a Toggle Group. Each slot now surfaces nested instances of the Toggle component.
- Adds Toggle Group interactions

#### Filter

- Moved to the Provet Product Patterns Figma document

#### Banner

- Updates text and surface colors for the [Banner](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7489%3A190206&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}
- Adds status border color to each variant
- Removes variant with dropshadow
- Adds `Text` property
- Adds [Banner examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7489%3A190490&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Empty State

- Removes `Variant` property
- Adds `Header` and `Text` properties
- Adds `Buttons` property toggle to show or hide buttons
- Adds [Empty State examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7539%3A194250&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Toast

- Adds `Text` property
- Adds `Variant` property which include options for `Default` and `Danger`
- Removes `Button state` property

#### Notification

- Adds new [Notification](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=6831%3A54201&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Notification Group

- Adds new [Notification Group](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7310%3A85081&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Progress Bar

- Adds new [Progress Bar](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7480%3A191678&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Spinner

- Adds new [Spinner](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7192%3A64986&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Navigation

- Adds `Header slot` which supports the Clinic Switcher
- Adds `Default slot` which contains the main navigation content
- Adds `Bottom slot` to the Navigation component
- Adds [Navigation interactions](https://www.figma.com/proto/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?page-id=1645%3A129909&type=design&node-id=7264-70346&viewport=940%2C1015%2C0.2&t=vNQi1FczHfKJEW1N-1&scaling=scale-down&starting-point-node-id=7264%3A70346&show-proto-sidebar=1&mode=design){rel="[\"nofollow\"]"}
- Adds toggles to enable `Quick View` and `Top Bar` properties
- Adds support for nested properties to show all properties from the top level of the component
- Adds [Navigation examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7264%3A70346&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Nav Item

- Adds new [Nav Item](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7237%3A73854&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Nav Group

- Adds new [Nav Group](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7237%3A75164&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Top Bar

- Adds new [Top Bar](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7143%3A65291&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component
- Adds new Top Bar dropdown for Notifications
- Adds new Top Bar dropdown for My Tasks
- Adds new Top Bar dropdown for Profile

#### Divider

- Adds `Padding` size property which supports `S`, `M`, `L`, `XL`, and `XXL` sizes
- Adds ability to remove padding from one or both sides of the divider
- Adds `Show redlines` property to show or hide padding labels
- Adds [Divider examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=5911%3A41285&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Header

- Adds `S` size variant which is appropriate when using the Top Bar component
- Adds a `Default slot` property to the header which includes properties for the Navigation Toggle and Header text. The Default slot can now be swapped with custom local content
- Adds an `End slot` property to the header which can be used for buttons. The End slot can be swapped with custom local content
- Adds nested properties for buttons to the top level of the Header component
- Adds [Header examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7192%3A63270&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Badge

- Removes `Progress` badge variant
- Adds `Strong` variant for each badge status
- Adds ability to add a `Check`, `Cancelled`, or `Warning` icon to the badge component
- Adds [Badge examples](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=5862%3A40882&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"}

#### Message

- Adds new [Message](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7296%3A87689&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Paragraph

- Adds new [Paragraph](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=6405%3A51697&mode=design&t=eE0iSqwTGxEZRKwF-1){rel="[\"nofollow\"]"} component

#### Nord Theme

- Adds `accent-secondary`, `text-danger`, `text-neutral`, `text-neutral-strong`, `text-warning`, `text-warning-strong`, `text-highlight`, `text-info`, `text-progress`, `border-neutral`,`border-warning`, `border-highlight`, `border-danger`,`border-success`, `border-info`, `border-progress`,`surface-lowered`, `header`, `status-notification`
- Updates `text-error`, `text-success`, `nav-surface`, `nav-hover`, `background`, `status-neutral`, `status-warning`, `status-highlight`, `status-danger`, `status-success`, `status-info`, `status-progress`, `status-success-weak`, `status-progress-weak`, `status-info-weak`, `status-highlight-weak`, `status-neutral-weak`, `status-warning-weak`, `status-danger-weak`, `button`

#### Release date

- Release date 10.8.2023.

### 2.11.0

- Adds new `file-invoice`, `file-treatment-plan`, `file-patient-records`, `generic-farm`, `generic-hospital`, `generic-company`, `generic-inventory`, `interface-skipped`, `medical-neutered`, `medical-spayed`, `medical-surgery`, `medical-drip` and `navigation-finances` icons.
- Updates `navigation-reports` icon.
- Adds tagging for new Nordicons in Figma Nordicons Library.
- Release date 12.4.2023.

### 2.10.0

- Updates [Avatar component](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?node-id=5482%3A41312&t=coA83Ba93g6VuCpM-1){rel="[\"nofollow\"]"}
- Updates generic avatar colors.
- Adds client, patient, and staff avatar variants.
- Updates avatar sizes.
- Adds XXL avatar size.
- Release date 23.3.2023.

### 2.9.0

- Updates [Card component](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?node-id=2943%3A28400){rel="[\"nofollow\"]"} to use space-L token for horizontal padding.
- Deprecates List component.
- Adds [Description list component](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?node-id=2929%3A51539){rel="[\"nofollow\"]"} and removes padding from base component.
- Updates component name of Sheet component to [Drawer](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?node-id=5411%3A37509){rel="[\"nofollow\"]"}, adds fixed footer, and custom content slots.
- Release date 28.9.2022.

### 2.8.0

- Adds new version of the Input Component. This includes support for prefix, suffix, icons, and sizes for small and large sizes for the Input component.
- Updates the pagination component to enable interactivity and jump to first & last page.
- Adds new xs (10px) and xxs (8px) icon sizes which are replacements for the old xs size. This is a non-breaking change so no actions are required from your side.
- Adds new animal category icons: generic-suidae, generic-sheep, generic-rodents, generic-reptilia, generic-leporidae, generic-fish, generic-feline, generic-equidae, generic-cattle, generic-canine, generic-birds, generic-arachnida, generic-amphibia.
- Changes medical-insurance icon from “a hand holding a plus sign” to represent “a shield.”
- Updates default card radius to default-radius token.
- Updates Button Group component.
- Updates List, Sheet, and Table components to new Badge style.
- Updates Figma Color Styles to the redesigned color system and new status colors: [https://nordhealth.design/tokens/](https://nordhealth.design/tokens/){rel="[\"nofollow\"]"}
- Release date 15.9.2022.

### 2.7.0

- Adds new `medical-insurance` icon to Nordicons.
- Release date 24.8.2022.

### 2.6.0

- Adds interactivity to Navigation component and Clinic Switcher.
- Adds Table header sorting with interactivity.
- Updates naming convention to s/m/l for buttons.
- Updates naming convention for Nordicons.
- Adds new `interface-grabber`, `interface-grid`, `interface-sort-small`, `interface-sort-up-small` and `interface-sort-down-small` icons to Nordicons.
- Release date 10.8.2022.

### 2.5.0

- Adds number input component with interactivity.
- Adds interactivity to checkbox and checkbox group.
- Release date 1.7.2022.

### 2.4.0

- Spacing token improvements in Figma including fill horizontal and fill vertical variants.
- Added labels inside of each component.
- Examples of auto-layout with space tokens.
- Removed button base component from library.
- Removed button group atoms from library.
- Release date 27.6.2022.

### 2.3.2

- Adding toast button variants.
- Updated toast component to add danger style & instance swap for close button.
- Release date 22.6.2022.

### 2.2.12

- Bugfix for card header update.
- Generic bug fixes.
- Updated default button placeholder text.
- Added buttons and selection indicator to card header.
- Fixed default instance of checkbox component in table components.
- Release date 16.6.2022.

### 2.2.8

- Removed redundant navigation indicator.
- Reverted to original position for notification indicator.
- Updated notification position in Navigation component.
- Added indeterminate checkbox variant.
- Table cell alignment correction.
- Updated spacing for table component.
- Release date 14.6.2022.

### 2.2.2

- Updated header component to improve sort indicator.
- Added sort indicator to table.
- Removed sort variant from cell columns and moved to atom/cell.
- Generic Bugfixes.
- Added sort icon to Nordicons.
- Release date 9.6.2022.

### 2.1.1

- Updated navigation component to preserve text and color overrides following icon component update.
- Removed instances of deprecated Nordicons component.
- Release date 1.6.2022.

### 2.1.0

- Created a new Icon component to add search and categories to improve icon findability in Figma.
- Previous Icon component has been deprecated and moved to the Nordicons file for reference when migrating to the new component.
- Updated banner component to preserve text overrides.
- Modified the modal component with image to use the default button styling for improved legibility.
- Release date 31.5.2022.

### 2.0.1

- Removed deprecated drop shadow styling to move to updated theme.

### 2.0.0

- Switches to using native theming for Nord dark and light themes, meaning we now use Figma Libraries instead of the previous Themer Plugin.
- We’ve removed separate Healthcare and Veterinary themes and made the Nord light theme the default. Nord dark theme exists still as well. We will next do a similar change in the code based system as well and will release new major versions of all packages that rely on the theming.
- We’ve added new stronger border color styles for the light Nord theme to reflect recent changes in our [design tokens](/tokens/).
- We’ve added new card shadow styles with raised surfaces to reflect recent changes in our [design tokens](/tokens/).
- Color libraries are moved onto separate files out of the Nord Figma Toolkit.
- Minor bug fixes and cleanup.

### 1.0.3

- Minor changes to tokens to enable native theming in Figma.

### 1.0.2

- Fixed alignment issue with select component expanded state.

### 1.0.1

- Moving Nordicons to a separate file to comply with license requirements.

### 1.0.0

- Initial release of Nord Figma Toolkit.
- Release date 17.3.2022.

<!--
Source: https://nordhealth.design/raw/changelogs/figma.md
-->
