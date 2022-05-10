const AssignmentModel = require('../model/model');

class AssignmentController {
  static async DefineDays(req, res) {
    const result = await AssignmentModel.DefineDays();
    res.status(200).json({ data: result });
  }

  static async DefineYears(req, res) {
    const body = req.body.year;
    const result = await AssignmentModel.DefineYears(body);
    res.status(200).json({
      data: result,
    });
  }
}

module.exports = AssignmentController;
