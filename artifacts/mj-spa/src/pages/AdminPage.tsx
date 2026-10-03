import { Studio } from 'sanity';
import config from '../../sanity.config';
import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    console.log('Sanity AdminPage mounted at:', window.location.pathname);
    // Force a specific title to confirm we are here
    document.title = 'MJ Fisio - Panel de Administración';
  }, []);

  return (
    <div id="sanity-admin-container" style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'white' }}>
      <Studio config={config} />
    </div>
  );
}
