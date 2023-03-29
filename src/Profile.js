const img = (
  <img src="https://ca.slack-edge.com/T024FPYBQ-U04KM0FE876-b7c6ce294b06-72"></img>
);
const Profile = () => {
  return (
    <div className="profileCard">
      <h1 className="profile card">Profile</h1>
      <h2 className="profile card">name</h2>
      <h2 className="profile card">home address</h2>
      <h2 className="profile card"> {img}</h2>
    </div>
  );
};

export default Profile;
