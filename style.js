import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  dateTouch: {
    width: 100
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateIcon: {
    width: 18,
    height: 18,
    marginLeft: 5,
    marginRight: 5,
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderWidth: 0.3,
    flexDirection: 'row',
    borderColor: '#C9C9C9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    color: '#333',
    paddingLeft: 10,
    width: '80%'
  },
  placeholderText: {
    color: '#c9c9c9',
    paddingLeft: 10,
    width: '80%'
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    color: '#46cf98'
  },
  btnTextCancel: {
    color: '#666'
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  }
});

export default style;
