import type { Member } from '@app-types/member';
import { useState, useMemo } from 'react';

interface UseMembersFilterParams {
  users: Member[];
}

export const useMembersFilter = ({ users }: UseMembersFilterParams) => {
  const [searchField, setSearchField] = useState<'name' | 'email'>('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredData = useMemo(() => {
    let filtered = users;

    if (searchQuery) {
      filtered = filtered.filter((m) =>
        m[searchField].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRole !== 'all') {
      filtered = filtered.filter((m) => m.role === selectedRole);
    }

    return filtered;
  }, [users, searchQuery, searchField, selectedRole]);

  const handleSearch = (field: 'name' | 'email', query: string) => {
    setSearchField(field);
    setSearchQuery(query);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  return {
    filteredData,
    searchField,
    searchQuery,
    selectedRole,
    handleSearch,
    handleRoleChange
  };
};
