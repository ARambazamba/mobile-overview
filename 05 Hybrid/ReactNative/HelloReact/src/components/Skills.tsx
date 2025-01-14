import * as React from "react";
import "./Skills.css";

export interface Skill {
  id: number;
  name: string;
}

export interface SkillProps {
  removeMsg: string;
}

export interface SkillState {
  skills: Skill[];
  addSkill: string;
}

export default class Skills extends React.Component<SkillProps, SkillState> {
  constructor(props: SkillProps) {
    super(props);
    this.state = {
      skills: [
        { id: 1, name: "Node.js" },
        { id: 2, name: "Type Script" },
        { id: 3, name: "Cordova" },
        { id: 4, name: "Objective C" },
        { id: 5, name: "Java" },
        { id: 6, name: "Angular" },
        { id: 7, name: "React" }
      ],
      addSkill: ""
    };

    this.handleSkillChange = this.handleSkillChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div>
          Your need the follwowing skills:
          <div>
            <label className="lblNewSkill">Enter a new skill:</label>
            <input type="text" onChange={this.handleSkillChange} />
            <button onClick={() => this.addSkill()}>Add</button>
          </div>
          <div className="divResponse">You typed: {this.state.addSkill}</div>
        </div>
        <ul>
          {this.state.skills.map((item: Skill) => {
            return (
              <li
                key={item.id}
                onClick={() => this.removeSkill(item)}
                className="li-skills"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <br />
        <h5>{this.props.removeMsg}</h5>
      </div>
    );
  }

  handleSkillChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ addSkill: e.currentTarget.value });
  }

  addSkill(): void {
    let newid = Math.max.apply(
      Math,
      this.state.skills.map(item => item.id + 1)
    );
    this.setState({
      skills: this.state.skills.concat([
        { id: newid, name: this.state.addSkill }
      ])
    });
    console.log(`Adding skill: ${this.state.addSkill} with ${newid}`);
  }

  removeSkill(skill: Skill): void {
    console.log(`Removing skill: ${skill.name}`);
    this.setState({
      skills: this.state.skills.filter((i: Skill) => i !== skill)
    });
  }
}
