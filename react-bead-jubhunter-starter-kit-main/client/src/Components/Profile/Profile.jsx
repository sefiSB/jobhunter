import "../../styles/myStyle.css";

function Profile({ user }) {

    
  return (
    <>

      <div className="profil">
        <h1 className="chakra-petch-regular">Profilom</h1>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Állás</th>
            <th scope="col">Fizetés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <tr>aa</tr>
              <tr style={{ color: "lightgrey" }}>bb</tr>
            </td>
            <td>
              <td>
                <tr>aa</tr>
                <tr style={{ color: "lightgrey" }}>bb</tr>
              </td>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Profile;
