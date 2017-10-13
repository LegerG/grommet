import { describe, PropTypes } from 'react-desc';

export default (Chart) => {
  const DocumentedChart = describe(Chart).description('A graphical chart.').usage(
    `import { Chart } from 'grommet';
    <Chart/>`
  );

  DocumentedChart.propTypes = {
    bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).description(
      `The limits for the values, specified as a two dimensional array.
      If not specified, the bounds will automatically be set to fit
      the provided values.`
    ),
    color: PropTypes.string.description(
      'A color identifier to use for the graphic color.'
    ).defaultProp('accent-1'),
    round: PropTypes.bool.description('Whether to round the line ends'),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(
        ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']),
      PropTypes.shape({
        height: PropTypes.oneOf(
          ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']),
        width: PropTypes.oneOf(
          ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']),
      }),
    ]).description(
      'The size of the Chart. Defaults to { width: "medium", height: "small" }.'
    ),
    thickness: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description(
      'The width of the stroke.'
    ).defaultProp('medium'),
    type: PropTypes.oneOf(['bar', 'line', 'area']).description(
      'The visual type of meter. The default is bar'
    ),
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string, // for accessibility of bars
      value: PropTypes.arrayOf(PropTypes.number).isRequired,
    })).description(
      `Array of value objects describing the data.
      'value' is a tuple indicating the coordinate of the value or a triple
      indicating the x coordinate and a range of two y coordinates.
      'label' is a text string describing it.`
    ),
  };

  return DocumentedChart;
};