import { NbJSThemeOptions } from '@nebular/theme';

const palette = {
  primary: '#3366ff',
  success: '#00d68f',
  info: '#0095ff',
  warning: '#ffaa00',
  danger: '#ff3d71',
};

const theme = {
  fontMain: 'Open Sans, sans-serif',
  fontSecondary: 'Raleway, sans-serif',

  bg: '#ffffff',
  bg2: '#f7f9fc',
  bg3: '#edf1f7',
  bg4: '#e4e9f2',

  border: '#ffffff',
  border2: '#f7f9fc',
  border3: '#edf1f7',
  border4: '#e4e9f2',
  border5: '#c5cee0',

  fg: '#8f9bb3',
  fgHeading: '#1a2138',
  fgText: '#1a2138',
  fgHighlight: palette.primary,
  layoutBg: '#f7f9fc',
  separator: '#edf1f7',

  primary: palette.primary,
  success: palette.success,
  info: palette.info,
  warning: palette.warning,
  danger: palette.danger,

  primaryLight: '#598bff',
  successLight: '#2ce69b',
  infoLight: '#42aaff',
  warningLight: '#ffc94d',
  dangerLight: '#ff708d',
};

export const DEFAULT_THEME = {
  name: 'default',
  variables: {
    ...theme,

    temperature: {
      arcFill: [ theme.primary, theme.primary, theme.primary, theme.primary, theme.primary ],
      arcEmpty: theme.bg2,
      thumbBg: theme.bg2,
      thumbBorder: theme.primary,
    },

    solar: {
      gradientLeft: theme.primary,
      gradientRight: theme.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: theme.bg2,
      radius: ['80%', '90%'],
    },

    traffic: {
      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',

      yAxisSplitLine: theme.separator,

      lineBg: theme.border4,
      lineShadowBlur: '1',
      itemColor: theme.border4,
      itemBorderColor: theme.border4,
      itemEmphasisBorderColor: theme.primary,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: theme.bg2,
      gradTo: theme.bg2,
    },

    electricity: {
      tooltipBg: theme.bg,
      tooltipLineColor: theme.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',

      axisLineColor: theme.border3,
      xAxisTextColor: theme.fg,
      yAxisSplitLine: theme.separator,

      itemBorderColor: theme.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: theme.primary,
      lineGradTo: theme.primary,
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: theme.bg2,
      areaGradTo: theme.bg2,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    bubbleMap: {
      titleColor: theme.fgText,
      areaColor: theme.bg4,
      areaHoverColor: theme.fgHighlight,
      areaBorderColor: theme.border5,
    },

    profitBarAnimationEchart: {
      textColor: theme.fgText,

      firstAnimationBarColor: theme.primary,
      secondAnimationBarColor: theme.success,

      splitLineStyleOpacity: '1',
      splitLineStyleWidth: '1',
      splitLineStyleColor: theme.separator,

      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },

    trafficBarEchart: {
      gradientFrom: theme.warningLight,
      gradientTo: theme.warning,
      shadow: theme.warningLight,
      shadowBlur: '0',

      axisTextColor: theme.fgText,
      axisFontSize: '12',

      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
    },

    countryOrders: {
      countryBorderColor: theme.border4,
      countryFillColor: theme.bg3,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: theme.primary,
      hoveredCountryFillColor: theme.primaryLight,
      hoveredCountryBorderWidth: '1',

      chartAxisLineColor: theme.border4,
      chartAxisTextColor: theme.fg,
      chartAxisFontSize: '16',
      chartGradientTo: theme.primary,
      chartGradientFrom: theme.primaryLight,
      chartAxisSplitLine: theme.separator,
      chartShadowLineColor: theme.primaryLight,

      chartLineBottomShadowColor: theme.primary,

      chartInnerLineColor: theme.bg2,
    },

    echarts: {
      bg: theme.bg,
      textColor: theme.fgText,
      axisLineColor: theme.fgText,
      splitLineColor: theme.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: theme.primary,
      areaOpacity: '0.7',
    },

    chartjs: {
      axisLineColor: theme.separator,
      textColor: theme.fgText,
    },

    orders: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#b2bac2',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#42db7d',
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstAreaGradFrom: 'rgba(236, 242, 245, 0.8)',
      firstAreaGradTo: 'rgba(236, 242, 245, 0.8)',
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // second line
      secondLineGradFrom: 'rgba(164, 123, 255, 1)',
      secondLineGradTo: 'rgba(164, 123, 255, 1)',

      secondAreaGradFrom: 'rgba(188, 92, 255, 0.2)',
      secondAreaGradTo: 'rgba(188, 92, 255, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: 'rgba(55, 220, 136, 1)',
      thirdLineGradTo: 'rgba(55, 220, 136, 1)',

      thirdAreaGradFrom: 'rgba(31 ,106, 124, 0.2)',
      thirdAreaGradTo: 'rgba(4, 126, 230, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    // TODO: need design for default theme
    profit: {
      bg: '#ffffff',
      textColor: '#ffffff',
      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      splitLineColor: 'rgba(161, 161 ,229, 0.2)',
      areaOpacity: '1',

      axisFontSize: '16',
      axisTextColor: '#b2bac2',

      // first bar
      firstLineGradFrom: '#00bece',
      firstLineGradTo: '#00da78',
      firstLineShadow: 'rgba(14, 16, 48, 0.4)',

      // second bar
      secondLineGradFrom: '#8069ff',
      secondLineGradTo: '#8357ff',
      secondLineShadow: 'rgba(14, 16, 48, 0.4)',

      // third bar
      thirdLineGradFrom: 'rgba(236, 242, 245, 0.8)',
      thirdLineGradTo: 'rgba(236, 242, 245, 0.8)',
      thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
    },

    orderProfitLegend: {
      firstItem: 'linear-gradient(90deg, #3edd81 0%, #3bddad 100%)',
      secondItem: 'linear-gradient(90deg, #8d7fff 0%, #b17fff 100%)',
      thirdItem: 'rgba(236, 242, 245, 0.8)',
    },

    visitors: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#b2bac2',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#42db7d',
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(14, 16, 48, 0)',

      areaGradFrom: 'rgba(188, 92, 255, 1)',
      areaGradTo: 'rgba(188, 92, 255, 0.5)',
      shadowLineDarkBg: '#a695ff',

      innerLineStyle: 'solid',
      innerLineWidth: '1',

      innerAreaGradFrom: 'rgba(60, 221, 156, 1)',
      innerAreaGradTo: 'rgba(60, 221, 156, 1)',
    },

    visitorsLegend: {
      firstIcon: 'linear-gradient(90deg, #3edd81 0%, #3bddad 100%)',
      secondIcon: 'linear-gradient(90deg, #8d7fff 0%, #b17fff 100%)',
    },

    visitorsPie: {
      firstPieGradientLeft: '#8defbb',
      firstPieGradientRight: '#8defbb',
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],

      secondPieGradientLeft: '#ff894a',
      secondPieGradientRight: '#ffcc10',
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '97%'],
      shadowOffsetX: '0',
      shadowOffsetY: '0',
    },

    visitorsPieLegend: {
      firstSection: 'linear-gradient(90deg, #ffcb17 0%, #ff874c 100%)',
      secondSection: '#8defbb',
    },

    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],

      fontSize: '22',

      firstPieGradientLeft: '#00d77f',
      firstPieGradientRight: '#00d77f',
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',

      secondPieGradientLeft: '#7756f7',
      secondPieGradientRight: '#7756f7',
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',

      thirdPieGradientLeft: '#ffca00',
      thirdPieGradientRight: '#ffca00',
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
    },

    earningLine: {
      gradFrom: 'rgba(188, 92, 255, 0.5)',
      gradTo: 'rgba(188, 92, 255, 0.5)',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '16',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },
  },
} as NbJSThemeOptions;
