var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component {
  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python", "C++"];
    
    return (
      <ul className="languages">
        {languages.map((lang) => {
          return (
            <li
              style={lang === this.props.selectedLanguage ? { color: "#D0021B"} : null }
              onClick={this.props.onSelect.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    return (
      <div>
        <p>Selected Language: {this.state.selectedLanguage}</p>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}/>
      </div>
    )
  }
}

module.exports = Popular;
