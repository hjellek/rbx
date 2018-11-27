import React from "react";

import { storiesOf } from "@storybook/react";

import { Box } from "components/box";
import { Columns } from "components/columns";
import { Heading } from "components/heading";
import { ColumnSizeModifierProps } from "./column";
import { COLUMN_SIZES } from "./constants";

storiesOf("Columns", module)
  .add("Basic", () => (
    <Columns>
      <Columns.Column>
        <p className="bd-notification is-success">First Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-info">Second Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning">Third Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning">Fourth Column</p>
      </Columns.Column>
    </Columns>
  ))
  .add("Sizes by name", () => (
    <div>
      {Object.keys(COLUMN_SIZES).map(size => (
        <Columns key={size}>
          <Columns.Column size={COLUMN_SIZES[size]}>
            <p className="bd-notification is-success">{COLUMN_SIZES[size]}</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Auto</p>
          </Columns.Column>
        </Columns>
      ))}
    </div>
  ))
  .add("Sizes by 12 Columns", () => (
    <div>
      <Columns>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-success">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-info">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-warning">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size={2 as 2}>
          <p className="bd-notification is-success">size-2</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-warning">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size={3 as 3}>
          <p className="bd-notification is-success">size-3</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size={4 as 4}>
          <p className="bd-notification is-success">size-4</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={5 as 5}>
          <p className="bd-notification is-success">size-5</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={6 as 6}>
          <p className="bd-notification is-success">size-6</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={7 as 7}>
          <p className="bd-notification is-success">size-7</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={8 as 8}>
          <p className="bd-notification is-success">size-8</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={9 as 9}>
          <p className="bd-notification is-success">size-9</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={10 as 10}>
          <p className="bd-notification is-success">size-10</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={11 as 11}>
          <p className="bd-notification is-success">size-11</p>
        </Columns.Column>
        <Columns.Column size={1 as 1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={12 as 12}>
          <p className="bd-notification is-success">size-12</p>
        </Columns.Column>
      </Columns>
    </div>
  ))
  .add("With Offset", () => (
    <div>
      <Columns mobile>
        <Columns.Column
          size={"half" as "half"}
          offset={"one-quarter" as "one-quarter"}
        >
          <p className="bd-notification is-info">
            size half
            <br />
            offset one-quarter
          </p>
        </Columns.Column>
      </Columns>

      <Columns mobile>
        <Columns.Column size={4 as 4} offset={8 as 8}>
          <p className="bd-notification is-info">
            size 4<br />
            offset 8
          </p>
        </Columns.Column>
      </Columns>

      <Columns mobile>
        <Columns.Column size={11 as 11} offset={1 as 1}>
          <p className="bd-notification is-info">
            size 11
            <br />
            offset 1
          </p>
        </Columns.Column>
      </Columns>
    </div>
  ))
  .add("Narrow", () => (
    <Columns>
      <Columns.Column narrow>
        <Box style={{ width: 200 }}>
          <Heading size={5 as 5} renderAs="p">
            Narrow column
          </Heading>
          <Heading subtitle renderAs="p">
            This column is only 200px wide.
          </Heading>
        </Box>
      </Columns.Column>
      <Columns.Column>
        <Box>
          <Heading size={5 as 5} renderAs="p">
            Flexible column
          </Heading>
          <Heading subtitle renderAs="p">
            This column will take up the remaining space available.
          </Heading>
        </Box>
      </Columns.Column>
    </Columns>
  ))
  .add("Responsive", () => (
    <div>
      <Box>
        <Heading size={5 as 5} renderAs="p">
          Mobile
        </Heading>
        <Columns breakpoint={"mobile" as "mobile"}>
          <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Third Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Fourth Column</p>
          </Columns.Column>
        </Columns>
      </Box>
      <Box>
        <Heading renderAs="p" size={5 as 5}>
          Tablet
        </Heading>
        <Columns breakpoint={"tablet" as "tablet"}>
          <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Third Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Fourth Column</p>
          </Columns.Column>
        </Columns>
      </Box>
      <Box>
        <Heading renderAs="p" size={5 as 5}>
          Desktop
        </Heading>
        <Columns breakpoint={"desktop" as "desktop"}>
          <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Third Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Fourth Column</p>
          </Columns.Column>
        </Columns>
      </Box>
    </div>
  ))
  .add("Different column size per breakpoint", () => (
    <Columns breakpoint={"mobile" as "mobile"}>
      <Columns.Column
        mobile={
          {
            size: "three-quarters",
          } as ColumnSizeModifierProps
        }
        tablet={
          {
            size: "two-thirds",
          } as ColumnSizeModifierProps
        }
        desktop={
          {
            size: "half",
          } as ColumnSizeModifierProps
        }
        widescreen={
          {
            size: "one-third",
          } as ColumnSizeModifierProps
        }
        fullhd={
          {
            size: "one-quarter",
          } as ColumnSizeModifierProps
        }
      >
        <p className="bd-notification is-success">
          is-three-quarters-mobile
          <br />
          is-two-thirds-tablet
          <br />
          is-half-desktop is-one-third-widescreen is-one-quarter-fullhd
        </p>
      </Columns.Column>
      <Columns.Column className="column">
        <p className="bd-notification is-info">1</p>
      </Columns.Column>
      <Columns.Column className="column">
        <p className="bd-notification is-warning">1</p>
      </Columns.Column>
    </Columns>
  ))
  .add("Nested", () => (
    <Columns>
      <Columns.Column size={"half" as "half"}>
        <p className="bd-notification is-success">First Column</p>
        <Columns>
          <Columns.Column size={"one-third" as "one-third"}>
            <p className="bd-notification is-info">First Nested Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">
              Second Nested Column (auto)
            </p>
          </Columns.Column>
        </Columns>
      </Columns.Column>
      <Columns.Column size={"half" as "half"}>
        <p className="bd-notification is-success">Second Column</p>
        <Columns>
          <Columns.Column size={"half" as "half"}>
            <p className="bd-notification is-info">
              First Nested Column (Half)
            </p>
          </Columns.Column>
          <Columns.Column size={"one-quarter" as "one-quarter"}>
            <p className="bd-notification is-warning">
              Second Nested Column (one-quarter)
            </p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">
              Third Nested Column (auto)
            </p>
          </Columns.Column>
        </Columns>
      </Columns.Column>
    </Columns>
  ))
  .add("gapless columns", () => (
    <Columns gapless>
      <Columns.Column>
        <p className="bd-notification is-success"> First Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-info"> Middle Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning"> Last Column</p>
      </Columns.Column>
    </Columns>
  ));