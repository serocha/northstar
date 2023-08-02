import NavTray from '../components/NavTray';

function Home(props) {

  const navSections = ['Services', 'Trainings', 'Our Team', 'Contact Us'];

  return(
    <div>
      <div>This is my home page.</div>
      <NavTray sections={navSections} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default Home;