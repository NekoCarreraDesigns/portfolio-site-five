import PropTypes from "prop-types"


const OpenInNewWindowButton = ({fileName, label}) => {
    const handleOpenInNewWindow = () => {
        window.open(fileName, '_blank')
    }
    return (<button onClick={handleOpenInNewWindow}>{label}</button>)
}

OpenInNewWindowButton.propTypes = {
    fileName: PropTypes.string.isRequired, // Require fileName prop to be a string
    label: PropTypes.string.isRequired, // Require label prop to be a string
  };

  export default OpenInNewWindowButton