# react-simple-scroll-container
A simple scrolling container for react.


[![npm package v](https://img.shields.io/npm/v/react-simple-scroll-container.svg)](https://www.npmjs.com/package/react-simple-scroll-container)
[![David Dependancy Status](https://david-dm.org/pixelatex/react-simple-scroll.svg)](https://david-dm.org/pixelatex/react-simple-scroll)
[![npm package dm](https://img.shields.io/npm/dm/react-simple-scroll-container.svg)](https://www.npmjs.com/package/react-simple-scroll-container)

## Table of Contents

*   API
    *  ScrollSection
    *  ScrollTo
    *  ScrollContainer
*   Examples


## Api

#### ScrollContainer

| Prop     | Type | What does it do |
| :-------- | :---- | :-------- |
| ContainerId   | String   | The id of the container to use for navigation. |
| ExtraStyle   | Object   | Inline css object to be added to the container div. |
| ExtraClass   | String   | Extra classname(s) to be added to the container div. |
| TopScroll   | Bool   | Should container detect the currently active top element. |
| TopScrollCallback   | Func   | Callback which provides the new active element. |
| TopScrollOffset   | Number   | This is a small offset for the active scrolling detection, default is 10 pixels. |

#### ScrollTo

| Prop     | Type | What does it do |
| :-------- | :---- | :-------- |
| SectionId   | String   | The id of the section to navigate to. |
| ContainerId   | String   | The id of the container the element is in. |
| Duration   |  Integer   | The time it will take the scroll to complete the distance in ms.|
| Offset   |  Integer   | The amount to offset the scrolling to ( 10 means it will scroll 10 pixels higher.)|


#### ScrollSection

| Prop     | Type | What does it do |
| :-------- | :---- | :-------- |
| Children   | React component(s)   | The children you want to be scrollable.
| SectionId   | String   | The section id you will use to scroll to.


## Examples

#### Basic usage of the container and sections

Using the containerId ensures you call a unique element in that specific container.

```javascript
<ScrollContainer id="newContainer">
     <ScrollSection id="section1">
        <somecomponent />
     </ScrollSection>
     ....
</ScrollContainer>
```

#### Scroll to a section

```javascript
<div onClick={() => ScrollTo('targetId','newContainer', 10, 500)}>
	Click me to navigate to section #1
</div>
```
