import React from "react";
import { UpdatePassword } from "../../components/user-profile/UpdatePassword";
import { UserProfile } from "../../components/user-profile/UserProfile";
import AdminLayout from "../../layout/AdminLayout";

const AdminProfile = () => {
  return (
    <AdminLayout>
      <h3 className="p-4 text-center">Admin Profile</h3>

      <UserProfile />
      <hr />
      <UpdatePassword />
    </AdminLayout>
  );
};

export default AdminProfile;
