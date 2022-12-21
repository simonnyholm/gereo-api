const roles = [
  {
    name: "Admin",
    permissions: [
      {
        name: "create-location",
      },
      {
        name: "update-location",
      },
      {
        name: "delete-location",
      },
      {
        name: "delete-user",
      },
      {
        name: "update-user",
      },
    ],
  },
  {
    name: "Creator",
    permissions: [
      {
        name: "create-location",
      },
      {
        name: "update-location",
      },
    ],
  },
];

export default roles;
