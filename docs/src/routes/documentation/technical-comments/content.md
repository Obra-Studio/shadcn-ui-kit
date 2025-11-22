## Guidelines on components

* Prefer composability.
* Prefer not to use the “text override” feature in variant properties as not to make the variant properties panel overcomplicated; people can override via the text itself.
* Use generic text like “Label” or “Value” in components for text.
* Use spacing variables within components for any spacing values to keep consistency where possible.
* Prefer showing examples of what you can do with a component as documentation rather than showing off what the component can do via a complex matrix of variants.
  * Sometimes odd values like 3, 7 or even fractional numbers are used to achieve the right height for components. For example, if we want to achieve 36px height for an auto layouted button; because of a combination the line height and the spacing variables, we have to use fractional numbers to get to 36px total. 
  * Use the [Obra Spacing Variable Fixer](https://www.figma.com/community/plugin/1545126955319474817/obra-spacing-variable-fixer) plugin to keep spacing values consistent. 
* Use border radii variables for any border radius variables to keep consistency
  * Use the [Obra Border Radius Variable Fixer plugin](https://www.figma.com/community/plugin/1545127635062919814/obra-border-radius-variable-fixer) to keep values consistent 

## Wrapper components

Wrapper components such as cards, dialogs, sheets etc. present an interesting problem: we want to be consistent in our styling, but we also want to customise the content.

We are not a big fan of slot components, but also not a big fan of detaching. We’re hoping Figma takes note and finds some form of solution for this in the future, some kind of “native” slots?

To promote consistency, we went for slot components but this might take some time to wrap your head around. [This video](https://www.youtube.com/watch?v=XMqUKlFUETc&ab_channel=Figma) can help you to understand the concept.

In practice, most “slot content” in this file is marked with a “.” in front of the layer name so it doesn't get published. For the select & combobox component, the slot content is managed in a hidden layer that authors unhide while editing and then hide again once they are finished working. A similar approach is used in the example screens. 