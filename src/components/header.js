import React from 'react'
import Favicon from './favicons'


const Header = () => {
return(

<div>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<meta name="description" content="{{ page.description | default: site.description | smartify }}"/>
<meta name="author" content="{{ site.authors }}"/>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135170115-1"></script>

<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());
  console.log("Script ran")
  gtag('config', 'UA-135170115-1');
  `}
</script>

<title>
Parth Check    
</title>
<Favicon />

</div>

    )


}

export default Header