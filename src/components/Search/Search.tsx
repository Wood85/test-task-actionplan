import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';
import React, { useState } from 'react';

type SearchField = 'name' | 'email';

interface SearchProps {
  onSearch: (field: SearchField, query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [field, setField] = useState<SearchField>('name');
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    onSearch(field, query.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2} flexWrap="wrap" sx={{ mb: 2 }}>
      <FormControl size="small">
        <Select
          value={field}
          onChange={(e) => setField(e.target.value as SearchField)}
          input={<OutlinedInput />}
        >
          <MenuItem value="name">По имени</MenuItem>
          <MenuItem value="email">По email</MenuItem>
        </Select>
      </FormControl>

      <TextField
        size="small"
        placeholder={`Введите ${field === 'name' ? 'имя' : 'email'}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="search" onClick={handleSubmit} edge="end" color="primary">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{ minWidth: 250 }}
      />
    </Box>
  );
};
