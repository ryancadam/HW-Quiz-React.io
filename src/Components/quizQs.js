import React from 'react';

import style from './quizQs.module.css';

const quizQs = props => {
    return (
        <div className={style.FlexContainer}>
            <h2>How well do you know The Reuben?</h2>
            <form className={style.Radio} onSubmit={props.formSubmit}>
                <div>
                    <p>1. Who invented the Reuben?</p>
                    <div>
                        <label>
                        <input type="radio" name="q1" value="A" defaultChecked="true" />
                        Reuben Kulakofsky, a grocer in Omaha, Nebraska
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q1" value="B"/>
                        Arnold Reuben, owner of Reuben's Delicatessen in NYC
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q1" value="C"/>
                        The Reuben always has been, always will be.
                        </label>
                    </div>
                </div>

                <div>
                    <p>2. How much pastrami goes in a Reuben?</p>
                    <div>
                        <label>
                        <input type="radio" name="q2" value="A" defaultChecked="true" />
                        Roughly 4 oz.
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q2" value="B"/>
                        Eyeball it. Whatever feels right
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q2" value="C"/>
                        All of it.
                        </label>
                    </div>
                </div>

                <div>
                    <p>3. Are you hankering for a Reuben right now?</p>
                    <div>
                        <label>
                        <input type="radio" name="q3" value="A" defaultChecked="true"/>
                        Yeah
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q3" value="B"/>
                        Nah, just ate
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q3" value="C"/>
                        Can't talk, eating a Reuben
                        </label>
                    </div>
                </div>

                <div>
                    <p>4. Your significant other won't let you serve Reubens at your wedding. What do you do?</p>
                    <div>
                        <label>
                        <input type="radio" name="q4" value="A" defaultChecked="true"/>
                        Respect his/her wishes
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q4" value="B"/>
                        Leave
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="q4" value="C"/>
                        I have no significant other. I have only the Reuben
                        </label>
                    </div>
                </div>
                <div>
                    <input className={style.Btn} type="submit"/>
                </div>
            </form>
        </div>      
    );
};

export default quizQs;