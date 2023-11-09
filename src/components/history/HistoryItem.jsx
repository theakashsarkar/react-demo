const HistoryItem = ({historyItem, restoreHistories, restorHandleBtn}) => {
    return (
                        <li key={historyItem.id}>
                            <p>Operations: {historyItem.input.a} {' '} {historyItem.operations} {' '} {historyItem.input.b}, Result: {historyItem.result}</p>
                            <small>{ historyItem.date.toLocaleDateString()} {' '} {historyItem.date.toLocaleTimeString()}</small>
                            <br />
                            <button onClick={() => restorHandleBtn(historyItem)} disabled={
                                restoreHistories != null && restoreHistories.id == historyItem
                            }>restore</button>
                        </li>        
    )
}

export default HistoryItem;