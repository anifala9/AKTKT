import Link from 'next/link';
import React, { useEffect} from 'react';

const TwitterTimeline = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
    /* どのサイト見ても

    return () => {
      document.body.removeChild(script);
    };
    */
  }, []);

  return (
    // divタグ括らないとページ遷移時に
    // Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    // が発生する
    <div> 
      <Link
        className="twitter-timeline" 
        href="https://twitter.com/shinji_ishimaru?ref_src=twsrc%5Etfw"
        data-width="300"
        data-height="250"
        data-theme="light"
        data-chrome="noheadernofooternoborders"
        >
        
      </Link>
    </div>
  );
};


export default TwitterTimeline;