import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import {
  forwardRefAs,
  genericPropTypes,
  HelpersProps,
  transformHelpers,
} from "../../base";
import { Breakpoints, BREAKPOINTS } from "../../base/helpers";
import { tuple } from "../../utils";
import { Column } from "./column";

export const COLUMNS_GAP_SIZES = tuple(0, 1, 2, 3, 4, 5, 6, 7, 8);
export type ColumnsGapSizes = (typeof COLUMNS_GAP_SIZES)[number];

export type ColumnsBreakpointProps = Partial<{
  /**
   * The column gap size for Tablet devices (Between 769px and 1023px)
   */
  gapSize: ColumnsGapSizes;
}>;

const ColumnsBreakpointPropTypes = {
  gapSize: PropTypes.oneOf(COLUMNS_GAP_SIZES),
};

type ColumnsModifierProps = Partial<
  {
    /**
     * Breakpoint where columns become stacked.
     */
    breakpoint: Breakpoints;
    /**
     * `true` you want the columns inside to be horizontaly centered
     */
    centered: boolean;
    /**
     * `true` to remove space between columns
     */
    gapless: boolean;
    /**
     * `true` if you want to use more than one line if you add more column
     * elements that would fit in a single row.
     */
    multiline: boolean;
    /**
     * The column gap size for Mobile devices (Up to 768px)
     */
    mobile: ColumnsBreakpointProps;
    /**
     * The column gap size for Tablet devices (Between 769px and 1023px)
     */
    tablet: ColumnsBreakpointProps;
    /**
     * The column gap size for Desktop devices (Between 1024 and 1215px)
     */
    desktop: ColumnsBreakpointProps;
    /**
     * The column gap size for WideScreen devices (Between 1216px and 1407px)
     */
    widescreen: ColumnsBreakpointProps;
    /**
     * The column gap size for FullHD devices (1408px and above)
     */
    fullhd: ColumnsBreakpointProps;
    /**
     * The column gap size for FullHD devices (1408px and above)
     */
    touch: ColumnsBreakpointProps;
  } & ColumnsBreakpointProps
>;

export type ColumnsProps = HelpersProps & ColumnsModifierProps;

const propTypes = {
  ...genericPropTypes,
  ...BREAKPOINTS.map(breakpoint => ({
    [breakpoint]: PropTypes.shape(ColumnsBreakpointPropTypes),
  })).reduce((acc, cv) => ({ ...acc, ...cv }), {}),
  ...ColumnsBreakpointPropTypes,
  breakpoint: PropTypes.oneOf(BREAKPOINTS),
  centered: PropTypes.bool,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
};

export const Columns = Object.assign(
  forwardRefAs<ColumnsProps, "div">(
    (props, ref) => {
      const {
        as,
        breakpoint,
        centered,
        desktop,
        fullhd,
        gapless,
        gapSize,
        mobile,
        multiline,
        tablet,
        widescreen,
        touch,
        ...rest
      } = transformHelpers(props);

      const breakpoints = {
        desktop,
        fullhd,
        mobile,
        tablet,
        touch,
        widescreen,
      };

      const gapClassNames = classNames(
        { [`is-${gapSize}`]: typeof gapSize === "number" },
        Object.keys(breakpoints)
          .filter(key => breakpoints[key])
          .map(key => {
            const value = breakpoints[key];
            return {
              [`is-${value.gapSize}-${key}`]: typeof value.gapSize === "number",
            };
          })
          .reduce((acc, cv) => ({ ...acc, ...cv }), {}),
      );

      rest.className = classNames(
        "columns",
        rest.className,
        {
          [`is-${breakpoint}`]: breakpoint,
          "is-centered": centered,
          "is-gapless": gapless,
          "is-multiline": multiline,
          "is-variable ": !!gapClassNames,
        },
        gapClassNames,
      );

      return React.createElement(as!, { ref, ...rest });
    },
    {
      as: "div",
      multiline: true,
    },
  ),
  {
    Column,
    propTypes,
  },
);
