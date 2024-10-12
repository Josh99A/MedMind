import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(e) => {
        e.preventDefault();
      }}
      {...props}
    />
  );
}

export default function KYCTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="kyc-tabs">
      <LinkTab label="Page One" href="/drafts" />
        <LinkTab label="Page Two" href="/trash" />
        <LinkTab label="Page Three" href="/spam" />
    </Tabs>
  )
}
