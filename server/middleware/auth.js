export const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Access denied: Admins only" });
    }
  };
export const teacherOnly = (req, res, next) => {
    if (req.user && req.user.role === "faculty") {
      next();
    } else {
      res.status(403).json({ message: "Access denied: Faculty only" });
    }
  };
  