module.exports = (sequelize, DAtaTypes) => {
  return sequelize.define(
    "class",
    {
      className: {
        type: DAtaTypes.STRING(50),
        allowNull: true
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false
    }
  );
};
