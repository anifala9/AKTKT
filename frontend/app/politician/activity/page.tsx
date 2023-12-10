"use client";

import { TwitterTimelineEmbed } from "react-twitter-embed";



export default function Page() {
  return (
  <div>
    <h1>This is politician&apos;s activity page</h1>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="shinji_ishimaru"
      options={{height: 400}}
    />
  </div>
  )
};

