import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import {Theme} from '../types';
import constants from '../commons/constants';

const LINE_COLOR = '#D8D8D8';
const TIME_LABEL_COLOR = '#AAAAAA';
const EVENT_TEXT_COLOR = '#615B73';
const NOW_INDICATOR_COLOR = 'red';
const UNAVAILABLE_HOURS_BLOCK_COLOR = '#F8F9FA';

export default function styleConstructor(
  theme: Theme = {
    line: {
      marginLeft: 60,
      opacity: 0.4
    },
    event: {
      borderRadius: 10,
      flex: 1,
      minWidth: 0,
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  },
  calendarHeight: number
) {
  const appStyle = {...defaultStyle, ...theme};

  return StyleSheet.create({
    container: {
      backgroundColor: appStyle.calendarBackground,
      ...appStyle.timelineContainer,
      marginBottom: 160
    },
    contentStyle: {
      backgroundColor: appStyle.calendarBackground,
      ...appStyle.contentStyle,
      flexDirection: 'row',
      height: calendarHeight + 10
    },
    line: {
      height: 1,
      backgroundColor: LINE_COLOR,
      ...theme.line,
      position: 'absolute'
    },
    verticalLine: {
      width: 0,
      backgroundColor: LINE_COLOR,
      ...appStyle.verticalLine,
      position: 'absolute',
      height: '105%'
    },
    nowIndicator: {
      position: 'absolute',
      right: 0
    },
    nowIndicatorLine: {
      height: 1,
      backgroundColor: NOW_INDICATOR_COLOR,
      ...appStyle.nowIndicatorLine,
      position: 'absolute',
      left: 0,
      right: 0
    },
    nowIndicatorKnob: {
      width: 7,
      height: 7,
      borderRadius: 4,
      backgroundColor: NOW_INDICATOR_COLOR,
      ...appStyle.nowIndicatorKnob,
      position: 'absolute',
      left: -3,
      top: -3
    },
    timeLabel: {
      color: '#222',
      fontSize: 14,
      fontWeight: '800',
      fontFamily: constants.isIOS ? 'Helvetica Neue' : 'Roboto',
      paddingLeft: 0,
      textAlign: 'center',
      ...appStyle.timeLabel,
      position: 'absolute'
    },
    unavailableHoursBlock: {
      position: 'absolute',
      right: 0,
      backgroundColor: UNAVAILABLE_HOURS_BLOCK_COLOR
    },
    event: {
      opacity: 1,
      paddingLeft: 12,
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: '#77b5d9',
      borderColor: '#f0f4ff',
      borderWidth: 1,
      ...appStyle.event,
      position: 'absolute',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      minHeight: 0,
      ...theme.event
    },
    eventTitle: {
      color: EVENT_TEXT_COLOR,
      fontWeight: '600',
      ...appStyle.eventTitle,
      minHeight: 15,
      flexWrap: 'wrap',
      fontSize: 16
    },
    eventSummary: {
      color: EVENT_TEXT_COLOR,
      fontSize: 12,
      ...appStyle.eventSummary,
      flexWrap: 'wrap',
      display: 'none'
    },
    eventTimes: {
      marginTop: 3,
      color: EVENT_TEXT_COLOR,
      fontSize: 10,
      fontWeight: 'bold',
      ...appStyle.eventTimes,
      flexWrap: 'wrap',
      display: 'none'
    },
    eventsContainer: {
      flex: 1,
      marginLeft: 60
    }
  });
}
