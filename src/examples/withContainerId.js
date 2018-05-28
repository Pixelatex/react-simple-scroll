import React, { Component } from 'react';
import { ScrollContainer, ScrollSection, ScrollTo } from 'react-simple-scroll'

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Example for using the module with the container id</h1>
                    <button onClick={() => ScrollTo('section1', 'testContainer')}>Go to 1</button>
                    <button onClick={() => ScrollTo('section5', 'testContainer')}>Go to 5</button>
                </header>
                <div>
                    <ScrollContainer
                        topScroll
                        topScrollCallback={(id) => console.log(id, 'active id!')}
                        extraStyle={{ height: '200px', backgroundColor: 'gray'}}
                        containerId="testContainer"
                    >
                        <ScrollSection sectionId="section1">
                            <div style={{ height: '40px'}}>Section 1</div>
                        </ScrollSection>
                        <ScrollSection sectionId="section2">
                            <div style={{ height: '70px'}}>Section 2</div>
                        </ScrollSection>
                        <ScrollSection sectionId="section3">
                            <div style={{ height: '70px'}}>Section 3</div>
                        </ScrollSection>
                        <ScrollSection sectionId="section4">
                            <div style={{ height: '70px'}}>Section 4</div>
                        </ScrollSection>
                        <ScrollSection sectionId="section5">
                            <div style={{ height: '70px'}}>Section 5</div>
                        </ScrollSection>
                        <ScrollSection sectionId="section6">
                            <div style={{ height: '70px'}}>Section 6</div>
                        </ScrollSection>
                    </ScrollContainer>
                </div>
            </div>
        );
    }
}

export default App;
