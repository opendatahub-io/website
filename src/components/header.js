import React from 'react'
import Favicon from './favicons'


const Header = () => {
return(

<div>

<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<meta name="description" content="{{ page.description | default: site.description | smartify }}"/>
<meta name="author" content="{{ site.authors }}"/>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135170115-1"></script>
<script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js" integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1" crossOrigin="anonymous"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());
  console.log("Script ran")
  gtag('config', 'UA-135170115-1');
  `}
</script>

<Favicon />

</div>

    )


}

export default Header