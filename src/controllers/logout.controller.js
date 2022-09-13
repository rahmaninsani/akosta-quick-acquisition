class LogoutController {
  static index(req, res, next) {
    try {
      req.logout((err) => {
        if (err) return next(err);
        res.redirect('/login');
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = LogoutController;
