import PropTypes from "prop-types";

// @mui
import { styled } from "@mui/material/styles";
import { Autocomplete, InputAdornment, Popper, TextField } from "@mui/material";
// components
import { Search } from "@mui/icons-material";

// ----------------------------------------------------------------------

const StyledPopper = styled((props) => (
  <Popper
    placement="bottom-start"
    {...props}
  />
))({
  width: "280px !important",
});

// ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function BlogPostsSearch({ posts }) {
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={StyledPopper}
      options={posts}
      getOptionLabel={(post) => post.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search post..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
