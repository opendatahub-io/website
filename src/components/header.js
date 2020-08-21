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
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>  
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