import * as React from "react";
import { Grid, TextField, FormHelperText, Autocomplete } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import { debounce } from "@mui/material/utils";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const autocompleteService = { current: null };

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const BasicInfo = (props) => {
  const { formik } = props;

  const [value, setValue] = React.useState(formik.values.address);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          {/* <InputLabel>Accomodation Type</InputLabel> */}
          <TextField
            name="accomodationType"
            label="Accomodation Type"
            onChange={formik.handleChange}
            error={Boolean(
              formik.errors.accomodationType && formik.touched.accomodationType
            )}
            value={formik.values.accomodationType}
            select
          >
            <MenuItem value={"Whole Unit"}>Whole Unit</MenuItem>
            <MenuItem value={"Shared Accomodation"}>
              Shared Accomodation
            </MenuItem>
            <MenuItem value={"Shared Bedroom"}>Shared Bedroom</MenuItem>
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="availSpots"
          label="Beds available"
          variant="outlined"
          type="number"
          fullWidth
          size="small"
          error={Boolean(formik.touched.availSpots && formik.errors.availSpots)}
          onChange={formik.handleChange}
          value={formik.values.availSpots}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          name="address"
          sx={{ width: 300 }}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.description
          }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value}
          noOptionsText="No locations"
          error={Boolean(formik.errors.address)}
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
            formik.setFieldValue("address", newValue !== null ? newValue["description"] : "");
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Add a location" fullWidth />
          )}
          renderOption={(props, option) => {
            const matches =
              option.structured_formatting.main_text_matched_substrings || [];

            const parts = parse(
              option.structured_formatting.main_text,
              matches.map((match) => [
                match.offset,
                match.offset + match.length,
              ])
            );

            return (
              <li {...props}>
                <Grid container alignItems="center">
                  <Grid item sx={{ display: "flex", width: 44 }}>
                    <LocationOnIcon sx={{ color: "text.secondary" }} />
                  </Grid>
                  <Grid
                    item
                    sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
                  >
                    {parts.map((part, index) => (
                      <Box
                        key={index}
                        component="span"
                        sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
                      >
                        {part.text}
                      </Box>
                    ))}
                    <Typography variant="body2" color="text.secondary">
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            );
          }}
        />
      </Grid>
      {formik.errors.submit && (
        <Grid item xs={12}>
          <FormHelperText error>{formik.errors.submit}</FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

export default BasicInfo;
