import { useState } from 'react';
function NotFound() {
    const [affiche, setAffiche] = useState(true);
    setTimeout(() => {
        setAffiche(false);
    }, 3000);
  return (
    <div>
      {
        affiche ? (
          <p>Page Not Found</p>
        ) : (
          <p></p>
        )
      }
    </div>
  )
}

export default NotFound
