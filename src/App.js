import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

const initialState = {
  outBoxID: "",
  batchcode: "",
  IQCInspector: "",
  defectCode: "",
  defectLocation: "",
  reworkMethod: "",
  reworkOperator: "",
  reinspectionResult: "",
  FQCInspector: "",
  inboxID: "",
};

function App() {
  const [item, setItem] = useState(initialState);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("", item);
      setOpenDialog(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{
        minHeight: "90vh",
      }}
    >
      <Grid item xs={4}>
        <Card>
          <CardHeader
            title="RCN Scan"
            style={{
              textAlign: "center",
              color: "#fff",
              background: "#009688",
            }}
          />
          <form onSubmit={handleSubmit}>
            <CardContent style={{ padding: 15 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Out box ID"
                    name="outBoxID"
                    onChange={handleChange}
                    value={item.outBoxID}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Batch code"
                    name="batchcode"
                    onChange={handleChange}
                    value={item.batchcode}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="IQC Inspector"
                    name="IQCInspector"
                    onChange={handleChange}
                    value={item.IQCInspector}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Defect Code"
                    name="defectCode"
                    onChange={handleChange}
                    value={item.defectCode}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Defect Location"
                    name="defectLocation"
                    onChange={handleChange}
                    value={item.defectLocation}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Rework Method"
                    name="reworkMethod"
                    onChange={handleChange}
                    value={item.reworkMethod}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Rework Operator"
                    name="reworkOperator"
                    onChange={handleChange}
                    value={item.reworkOperator}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Reinspection Result"
                    name="reinspectionResult"
                    onChange={handleChange}
                    value={item.reinspectionResult}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="FQC Inspector"
                    name="FQCInspector"
                    onChange={handleChange}
                    value={item.FQCInspector}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="In Box ID"
                    name="inboxID"
                    onChange={handleChange}
                    value={item.inboxID}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="outlined"
                    fullWidth
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      background: "#009688",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </form>
        </Card>
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <DialogContentText>Submit success</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default App;
