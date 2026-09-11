import { useState } from "react"

function Settings() {

  const [name, setName] = useState("Admin")
  const [email, setEmail] = useState("admin@example.com")
  const [phone, setPhone] = useState("+91 9876543210")

  const [emailNotifications, setEmailNotifications] = useState(true)
  const [orderNotifications, setOrderNotifications] = useState(true)

  const [message, setMessage] = useState("")

  const handleSave = (e) => {
    e.preventDefault()

    setMessage("Settings saved successfully!")

    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  return (
    <div className="settings-page">

      <h1>Settings</h1>

      <p className="page-description">
        Manage your account and application preferences.
      </p>

      <form onSubmit={handleSave}>

        {/* Profile Settings */}

        <div className="settings-card">

          <h2>Profile Settings</h2>

          <div className="settings-form">

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>

            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div className="form-group">

              <label>Phone</label>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

            </div>

          </div>

        </div>

        {/* Notification Settings */}

        <div className="settings-card">

          <h2>Notifications</h2>

          <div className="setting-option">

            <div>
              <h3>Email Notifications</h3>

              <p>
                Receive important updates through email.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) =>
                setEmailNotifications(e.target.checked)
              }
            />

          </div>

          <div className="setting-option">

            <div>
              <h3>Order Notifications</h3>

              <p>
                Receive notifications about new orders.
              </p>
            </div>

            <input
              type="checkbox"
              checked={orderNotifications}
              onChange={(e) =>
                setOrderNotifications(e.target.checked)
              }
            />

          </div>

        </div>

        {/* Security Settings */}

        <div className="settings-card">

          <h2>Security</h2>

          <div className="security-info">

            <div>
              <h3>Password</h3>

              <p>
                Your password was last changed recently.
              </p>
            </div>

            <button
              type="button"
              className="secondary-button"
              onClick={() =>
                alert("Password change feature coming soon")
              }
            >
              Change Password
            </button>

          </div>

        </div>

        {/* Save */}

        <div className="settings-actions">

          <button
            type="submit"
            className="save-button"
          >
            Save Changes
          </button>

          {message && (
            <span className="success-message">
              {message}
            </span>
          )}

        </div>

      </form>

    </div>
  )
}

export default Settings