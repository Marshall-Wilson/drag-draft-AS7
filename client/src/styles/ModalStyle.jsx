const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '320px',
    maxHeight: '70%',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: 24,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'baseline',
    padding: '0px 10px 50px 10px',
    overflow: 'scroll'
}

const QueenButtonStyle = {
    width: '100%',
    padding: '0 6px',
    display: 'flex', 
    justifyContent: 'space-between',
    margin: '5px 0',
    border: '1px solid rgba(229, 229, 229, 1)',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
}

const QueenImageStyle = {
    width: '75%',
    marginTop: '50px',
    marginBottom: '10px'
}

export { ModalStyle, QueenButtonStyle, QueenImageStyle };