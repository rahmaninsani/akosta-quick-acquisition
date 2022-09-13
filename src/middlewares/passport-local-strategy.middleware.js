const LocalStrategy = require('passport-local').Strategy;
const { UserService, RoleService } = require('../services');
const { compare } = require('../utils');

const passportLocalStrategy = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      const user = await UserService.findOneByEmail(email);

      // If user/email is not found
      if (!user) return done(null, false);

      // If password is incorrect
      if (!(await compare(password, user.password))) return done(null, false);

      // Check use role
      const { name: roleName } = await RoleService.findOneById(user.roleId);
      // If user role is not admin
      if (roleName !== 'admin') return done(null, false);

      // If OK
      return done(null, {
        name: user.name,
        email: user.email,
        role: roleName,
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, {
      name: user.name,
      email: user.email,
      role: user.role,
    });
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = passportLocalStrategy;
