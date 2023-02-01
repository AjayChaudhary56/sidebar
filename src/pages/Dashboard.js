import {
  Card,
  CardMedia,
  Container,
  Grid,
  Grow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {};

  return (
    <Grow in>
      <Container
        maxWidth="md"
        sx={{
          marginTop: "2rem",
        }}
      >
        <Card sx={{ backgroundColor: "grey" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    alt="user-img"
                    height="200"
                    image={
                      "https://img.search.brave.com/YZ8HvSLdgaVvUGq1io_NN6jaXZlCVL2da1G4ANNvnO0/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/TXNRQkd1TzA0SG1U/N0JjTjJYQjhBSGFF/OCZwaWQ9QXBp"
                    }
                  />
                </Card>
                <Typography variant="body1" textAlign="left" gutterBottom>
                  Choose Image
                </Typography>
                <div
                  style={{
                    overflow: "hidden",
                    width: "150px",
                    textOverflow: "ellipsis",
                  }}
                >
                  <TextField
                    variant="standard"
                    type="file"
                    name="image1"
                    // onChange={uploadFileHandler}
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8} ml={3}>
                <Typography variant="body1" textAlign="left" gutterBottom>
                  Name
                </Typography>
                <TextField
                  variant="outlined"
                  // label="Name"
                  required
                  {...register("name", { required: true })}
                  fullWidth
                />
                {errors.name?.type === "required" && (
                  <Typography
                    variant="body2"
                    textAlign="left"
                    sx={{ color: "red" }}
                    gutterBottom
                  >
                    Name is required
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </Grow>
  );
};

export default Dashboard;
