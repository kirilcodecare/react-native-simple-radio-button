var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
} = ReactNative;

var Style = StyleSheet.create({
  radioForm: {
  },

  radioWrap: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 30,
    height: 30,


    alignSelf: 'center',

    borderColor: '#2196f3',
    borderRadius: 30,
  },

  radioLabel: {
    paddingRight: 5,
    lineHeight: 20,
  },

  radioNormal: {
    borderRadius: 10,
  },

  radioActive: {
    width: 20,
    height: 20,
    backgroundColor: '#2196f3',
  },

  labelWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },

  labelVerticalWrap: {
    flexDirection: 'column',
    paddingLeft: 5,
  },

  labelVertical: {
    paddingLeft: 0,
  },

  formHorizontal: {
    flexDirection: 'row',
  },
});

module.exports = Style;
