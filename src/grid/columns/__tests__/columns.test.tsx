import Enzyme from "enzyme";
import React from "react";

import { BREAKPOINTS } from "../../../base/helpers";
import { Column } from "../column";
import { Columns, COLUMNS_GAP_SIZES } from "../columns";

import {
  hasProperties,
  testGenericPropTypes,
  validateBoolPropType,
  validateOneOfPropType,
  validatePropType,
} from "../../../__tests__/testing";

describe("Columns component", () => {
  hasProperties(Columns, {
    Column,
    defaultProps: {
      as: "div",
      multiline: true,
    },
  });

  it("should render as the default element", () => {
    const wrapper = Enzyme.shallow(<Columns />);
    expect(wrapper.is("div")).toBe(true);
  });

  it("should render as a custom component", () => {
    const as = "span";
    const wrapper = Enzyme.shallow(<Columns as={as} />);
    expect(wrapper.is(as)).toBe(true);
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    // Enzyme owns outer ref: https://github.com/airbnb/enzyme/issues/1852
    const wrapper = Enzyme.mount(
      <div>
        <Columns ref={ref} />
      </div>,
    );
    try {
      expect(ref.current).toBe(wrapper.find(".columns").instance());
    } finally {
      wrapper.unmount();
    }
  });

  it("should have bulma className", () => {
    const wrapper = Enzyme.shallow(<Columns />);
    expect(wrapper.hasClass("columns")).toBe(true);
  });

  it("should preserve custom className", () => {
    const className = "foo";
    const wrapper = Enzyme.shallow(<Columns className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
    expect(wrapper.hasClass("is-variable")).toBe(false);
  });

  BREAKPOINTS.map(breakpoint =>
    it(`should have breakpoint ${breakpoint}`, () => {
      const wrapper = Enzyme.shallow(<Columns breakpoint={breakpoint} />);
      expect(wrapper.hasClass(`is-${breakpoint}`)).toBe(true);
      expect(wrapper.hasClass("is-variable")).toBe(false);
    }),
  );

  [false, true].map(centered =>
    it(`should ${centered ? "" : "not "}be centered`, () => {
      const wrapper = Enzyme.shallow(<Columns centered={centered} />);
      expect(wrapper.hasClass("is-centered")).toBe(centered);
      expect(wrapper.hasClass("is-variable")).toBe(false);
    }),
  );

  [false, true].map(gapless =>
    it(`should ${gapless ? "" : "not "}be gapless`, () => {
      const wrapper = Enzyme.shallow(<Columns gapless={gapless} />);
      expect(wrapper.hasClass("is-gapless")).toBe(gapless);
      expect(wrapper.hasClass("is-variable")).toBe(false);
    }),
  );

  COLUMNS_GAP_SIZES.map(gapSize =>
    it(`should have gapSize ${gapSize}`, () => {
      const wrapper = Enzyme.shallow(<Columns gapSize={gapSize} />);
      expect(wrapper.hasClass(`is-${gapSize}`)).toBe(true);
      expect(wrapper.hasClass("is-variable")).toBe(true);
    }),
  );

  [false, true].map(multiline =>
    it(`should ${multiline ? "" : "not "}be multiline`, () => {
      const wrapper = Enzyme.shallow(<Columns multiline={multiline} />);
      expect(wrapper.hasClass("is-multiline")).toBe(multiline);
      expect(wrapper.hasClass("is-variable")).toBe(false);
    }),
  );

  BREAKPOINTS.map(breakpoint =>
    describe(`for ${breakpoint}`, () => {
      COLUMNS_GAP_SIZES.map(gapSize =>
        it(`should have gapSize ${gapSize}`, () => {
          const props = { [breakpoint]: { gapSize } };
          const wrapper = Enzyme.shallow(<Columns {...props} />);
          expect(wrapper.hasClass(`is-${gapSize}-${breakpoint}`)).toBe(true);
          expect(wrapper.hasClass("is-variable")).toBe(true);
        }),
      );
    }),
  );

  describe("propTypes", () => {
    const { propTypes } = Columns;
    testGenericPropTypes(propTypes);
    validateOneOfPropType(propTypes, "breakpoint", BREAKPOINTS);
    validateBoolPropType(propTypes, "centered");
    validateBoolPropType(propTypes, "gapless");
    validateBoolPropType(propTypes, "multiline");
    validateOneOfPropType(propTypes, "gapSize", COLUMNS_GAP_SIZES);

    BREAKPOINTS.map(breakpoint => {
      describe(breakpoint, () => {
        validatePropType(propTypes, breakpoint, [
          ...COLUMNS_GAP_SIZES.map(value => ({
            descriptor: `gapSize = ${value}`,
            valid: true,
            value: { gapSize: value },
          })),
          {
            descriptor: "gapSize = 'string'",
            error: new RegExp(
              `Warning.+Failed prop.+ \`${breakpoint}.gapSize\``,
            ),
            valid: false,
            value: { gapSize: "__UNKNOWN" },
          },
        ]);
      });
    });
  });
});
