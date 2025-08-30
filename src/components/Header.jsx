import chefMistralLogo from "../images/chef-mistral-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img src={chefMistralLogo} alt="chef Mistral icon" />
      <h1>Chef Mistral</h1>
    </header>
  );
}
