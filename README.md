
# react-simple-scroll
A simple scrolling container for react.

## Table of Contents

*   API
    *  ScrollSection
    *  ScrollContainer
*   Example


## Api

#### WithScroll

| Prop     | Type | What does it do |
| :-------- | :---- | :-------- |
| WrappedComponent   | React component   | This needs to be wrapped around every child of a scroll section.

#### ScrollContainer

No api available.

#### ScrollTo

| Prop     | Type | What does it do |
| :-------- | :---- | :-------- |
| SectionId   | String   | The id of the section to navigate to. |
| Duraton   |  Integer   | The time it will take the scroll to complete the distance in ms.|
| Offset   |  Integer   | The amount to offset the scrolling to ( 10 means it will scroll 10 pixels higher.)|


#### ScrollSection

| Prop     | Type | What does it do |
| :-------- | :---- | :-------- |
| Children   | React component(s)   | The children you want to be scrollable.
| SectionId   | String   | The section id you will use to scroll to.


## Example

#### Basic usage of the container and sections

```javascript
<ScrollContainer>
    <div>
         <ScrollSection id="section1">
         <somecomponent />
         </ScrollSection>
         ....
    </div>
</ScrollContainer>
```

#### Scroll to a section

```javascript
<div onClick={() => ScrollTo('targetId', 10, 500)}>
	Click me to navigate to section #1
</div>
```
