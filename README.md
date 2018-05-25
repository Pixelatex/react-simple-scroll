
# simple-scroll Documentation

## Table of Contents

*   API
    *  WithScroll
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
| Id   | String   | The section id you will use to scroll to.


## Example

#### WithScroll  (container)

```javascript
export default connect(mapState)(WithScroll(SomeComponent))
```

#### WithScroll  (index)

```javascript
export default WithScroll(SomeComponent)
```

#### Basic usage of the container and sections

```javascript
<ScrollContainer>
	<div>
		 <ScrollSection id="section1">
		 <.. some component />
		 </ScrollSection>
		 ....
	  </div>
</ScrollContainer>
```

#### Scroll to a section

```javascript
<div onClick={() => ScrollTo(props.to, props.offset, props.duration)}>
	Click me to navigate to section #1
</div>
```
